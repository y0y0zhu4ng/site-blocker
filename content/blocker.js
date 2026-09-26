(function () {
  const HOST_ID = "site-blocker-host";

  function mount() {
    if (document.getElementById(HOST_ID)) {
      return;
    }

    const root = document.documentElement;
    if (!root) {
      return;
    }

    const host = document.createElement("div");
    host.id = HOST_ID;
    host.innerHTML = `
      <div class="blocker">
        <h1 class="blocker__title">SITE BLOCKED</h1>
        <p class="blocker__message">get back to work</p>

      </div>
    `;
    root.appendChild(host);
  }

  mount();
  document.addEventListener("DOMContentLoaded", mount, { once: true });

  new MutationObserver(mount).observe(document.documentElement, {
    childList: true,
  });
})();
