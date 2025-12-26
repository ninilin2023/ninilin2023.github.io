const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const copyBtn = document.getElementById("copyEmailBtn");
if (copyBtn) {
  copyBtn.addEventListener("click", async () => {
    const email = "ninil@andrew.cmu.edu";
    try {
      await navigator.clipboard.writeText(email);
      copyBtn.textContent = "Copied!";
      setTimeout(() => (copyBtn.textContent = "Copy email"), 1200);
    } catch {
      alert(email);
    }
  });
}
