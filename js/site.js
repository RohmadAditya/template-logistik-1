document.addEventListener("DOMContentLoaded",()=>{
  const b=document.querySelector("[data-menu]"),n=document.querySelector("[data-nav]");
  if(b&&n)b.addEventListener("click",()=>n.classList.toggle("open"));

  document.querySelectorAll("[data-whatsapp-form]").forEach(form=>form.addEventListener("submit",e=>{
    e.preventDefault();
    const data=new FormData(form);
    const message=[
      "Halo NusaRoute Logistics, saya ingin meminta informasi pengiriman.",
      "",
      `Nama lengkap: ${data.get("nama")||"-"}`,
      `Email bisnis: ${data.get("email")||"-"}`,
      `Kota asal: ${data.get("asal")||"-"}`,
      `Kota tujuan: ${data.get("tujuan")||"-"}`,
      `Jenis kebutuhan: ${data.get("kebutuhan")||"-"}`,
      `Pesan: ${data.get("pesan")||"-"}`
    ].join("\n");
    window.location.href=`https://wa.me/628998183329?text=${encodeURIComponent(message)}`;
  }));

  document.querySelectorAll("form:not([data-whatsapp-form])").forEach(f=>f.addEventListener("submit",e=>{
    e.preventDefault();
    const s=document.createElement("p");
    s.className="muted";
    s.textContent="Terima kasih. Formulir ini masih berupa simulasi dan belum tersambung ke sistem produksi.";
    f.append(s);
  }));
});
