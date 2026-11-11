(function () {
  "use strict";

  const items = (window.ITEMS || []).filter(Boolean);
  const config = window.SITE_CONFIG || {};
  const grid = document.getElementById("grid");
  const empty = document.getElementById("empty");
  const modal = document.getElementById("modal");
  const form = document.getElementById("offer-form");
  const formMsg = document.getElementById("form-msg");
  const offerBtn = document.getElementById("m-offer-btn");
  const F = form.elements;
  let filter = "all";
  let current = null;

  const isAvailable = (it) => it.forSale && !it.sold;
  const fmtPrice = (n) => Number(n).toLocaleString("he-IL");

  function badgeFor(it) {
    if (it.sold) return '<span class="badge badge-sold">נמכר</span>';
    if (it.forSale) return '<span class="badge badge-sale">למכירה</span>';
    return "";
  }

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    })[c]);
  }

  /* ---------- Gallery ---------- */
  function render() {
    const list = filter === "sale" ? items.filter((it) => it.forSale) : items;
    grid.innerHTML = list.map((it) => `
      <button class="card" type="button" data-id="${esc(it.id)}">
        <div class="card-media">
          <img src="${esc(it.image)}" alt="${esc(it.title)}" loading="lazy">
          ${badgeFor(it)}
        </div>
        <div class="card-body">
          <h3 class="card-title">${esc(it.title)}</h3>
          <p class="card-model" dir="ltr">${esc(it.model)}</p>
        </div>
      </button>`).join("");
    empty.hidden = list.length > 0;
    document.querySelector('[data-count="all"]').textContent = `(${items.length})`;
    document.querySelector('[data-count="sale"]').textContent = `(${items.filter((it) => it.forSale).length})`;
  }

  function setFilter(f) {
    filter = f;
    document.querySelectorAll(".chip").forEach((c) => {
      const on = c.dataset.filter === f;
      c.classList.toggle("is-active", on);
      c.setAttribute("aria-selected", on);
    });
    render();
  }

  document.querySelectorAll(".chip").forEach((c) =>
    c.addEventListener("click", () => setFilter(c.dataset.filter)));
  document.querySelectorAll("[data-jump-filter]").forEach((a) =>
    a.addEventListener("click", () => setFilter(a.dataset.jumpFilter)));

  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (card) openItem(card.dataset.id, true);
  });

  /* ---------- Item dialog ---------- */
  function openItem(id, pushHash) {
    const it = items.find((x) => x.id === id);
    if (!it) return;
    current = it;
    const img = document.getElementById("m-img");
    img.src = it.image;
    img.alt = it.title;
    document.getElementById("m-badge").innerHTML = badgeFor(it);
    document.getElementById("m-title").textContent = it.title;
    document.getElementById("m-model").textContent = it.model || "";
    document.getElementById("m-desc").textContent = it.description || "";
    document.getElementById("m-price").textContent =
      isAvailable(it) && it.startPrice !== "" && it.startPrice != null
        ? `מחיר פתיחה: ₪${fmtPrice(it.startPrice)}` : "";

    offerBtn.hidden = !isAvailable(it);
    form.hidden = true;
    form.reset();
    formMsg.textContent = "";
    formMsg.className = "form-msg";
    form.querySelectorAll("[aria-invalid]").forEach((el) => el.removeAttribute("aria-invalid"));
    form.querySelector('[type="submit"]').disabled = false;
    F.price.min = it.startPrice ? String(it.startPrice) : "1";
    F.pickupDate.min = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10);

    if (!modal.open) modal.showModal();
    modal.scrollTop = 0;
    if (pushHash) history.replaceState(null, "", "#" + encodeURIComponent(it.id));
  }

  function closeItem() {
    if (modal.open) modal.close();
  }
  modal.addEventListener("close", () => {
    current = null;
    if (location.hash && location.hash !== "#gallery") {
      history.replaceState(null, "", location.pathname + location.search + "#gallery");
    }
  });
  modal.querySelector("[data-close]").addEventListener("click", closeItem);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeItem(); });

  offerBtn.addEventListener("click", () => {
    form.hidden = false;
    F.name.focus({ preventScroll: true });
    form.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  function openFromHash() {
    const id = decodeURIComponent(location.hash.slice(1));
    if (id && items.some((x) => x.id === id)) openItem(id, false);
  }
  window.addEventListener("hashchange", openFromHash);

  /* ---------- Share ---------- */
  function toast(msg) {
    const t = document.createElement("div");
    t.className = "toast";
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 2200);
  }
  async function share(url, title) {
    if (navigator.share) {
      try { await navigator.share({ title, url }); return; } catch (e) { if (e.name === "AbortError") return; }
    }
    try { await navigator.clipboard.writeText(url); toast("הקישור הועתק"); }
    catch { window.open("https://wa.me/?text=" + encodeURIComponent(title + " " + url), "_blank"); }
  }
  const baseUrl = () => location.href.split("#")[0];
  document.getElementById("share-site").addEventListener("click", () =>
    share(baseUrl(), "לזכרו של שוקי שורץ — היצירות שבנה"));
  document.getElementById("m-share").addEventListener("click", () => {
    if (current) share(baseUrl() + "#" + encodeURIComponent(current.id), current.title);
  });

  /* ---------- Offer form ---------- */
  function setMsg(text, kind) {
    formMsg.textContent = text;
    formMsg.className = "form-msg" + (kind ? " " + kind : "");
  }

  function validate() {
    const errs = [];
    const mark = (el, bad) => bad ? el.setAttribute("aria-invalid", "true") : el.removeAttribute("aria-invalid");
    const name = F.name.value.trim();
    const phoneDigits = F.phone.value.replace(/\D/g, "");
    const price = Number(F.price.value);
    const min = Number(F.price.min) || 1;
    const date = F.pickupDate.value;

    mark(F.name, name.length < 2); if (name.length < 2) errs.push("שם");
    const phoneBad = !/^(0\d{8,9}|972\d{8,9})$/.test(phoneDigits);
    mark(F.phone, phoneBad); if (phoneBad) errs.push("טלפון תקין");
    const priceBad = !(price >= min);
    mark(F.price, priceBad); if (priceBad) errs.push(min > 1 ? `מחיר (לפחות ₪${fmtPrice(min)})` : "מחיר");
    const dateBad = !date || date < F.pickupDate.min;
    mark(F.pickupDate, dateBad); if (dateBad) errs.push("תאריך איסוף");
    return errs;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!current) return;
    const errs = validate();
    if (errs.length) { setMsg("נא למלא: " + errs.join(", "), "error"); return; }
    const gf = config.googleForm || {};
    if (!gf.url) { setMsg("המכירה עדיין לא פתוחה. נסו שוב בקרוב.", "error"); return; }

    const btn = form.querySelector('[type="submit"]');
    btn.disabled = true;
    setMsg("שולח…");
    const [y, m, d] = F.pickupDate.value.split("-");
    const values = {
      item: current.title,
      name: F.name.value.trim(),
      phone: F.phone.value.trim(),
      price: F.price.value,
      pickupDate: `${d}/${m}/${y}`,
      notes: F.notes.value.trim(),
    };
    const body = new URLSearchParams();
    Object.keys(gf.fields || {}).forEach((k) => body.append(gf.fields[k], values[k] || ""));
    try {
      // Spam trap: real visitors never fill the hidden "website" field.
      if (!F.website.value) {
        // Google Forms doesn't let the page read its reply ("no-cors"); a network failure still throws.
        await fetch(gf.url, { method: "POST", mode: "no-cors", body });
      }
      form.querySelectorAll("input, textarea").forEach((el) => (el.disabled = true));
      setMsg("תודה! ההצעה התקבלה, וניצור איתך קשר בהקדם.", "ok");
      btn.hidden = true;
    } catch (err) {
      btn.disabled = false;
      setMsg("משהו השתבש בשליחה. בדקו את החיבור לאינטרנט ונסו שוב.", "error");
    }
  });

  // Re-enable fields when a new item is opened
  modal.addEventListener("close", () => {
    form.querySelectorAll("input, textarea").forEach((el) => (el.disabled = false));
    form.querySelector('[type="submit"]').hidden = false;
  });

  const note = document.getElementById("pickup-note");
  if (config.pickupNote) { note.textContent = "📍 " + config.pickupNote; note.hidden = false; }
  if (config.pickupUntil) F.pickupDate.max = config.pickupUntil;

  render();
  openFromHash();
})();
