(() => {
  const root = document.documentElement;
  const storedTheme = localStorage.getItem("sitrep-theme");
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

  if (storedTheme) {
    root.dataset.theme = storedTheme;
  } else if (prefersLight) {
    root.dataset.theme = "light";
  }

  const toggle = document.querySelector("[data-theme-toggle]");
  const syncThemeToggle = () => {
    if (!toggle) return;
    const isLight = root.dataset.theme === "light";
    toggle.setAttribute("aria-pressed", String(isLight));
    toggle.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");
  };

  syncThemeToggle();

  if (toggle) {
    toggle.addEventListener("click", () => {
      const nextTheme = root.dataset.theme === "light" ? "dark" : "light";
      root.dataset.theme = nextTheme;
      localStorage.setItem("sitrep-theme", nextTheme);
      syncThemeToggle();
    });
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reducedMotion) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16 });

    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  const network = document.querySelector(".hero-network");
  if (network && !reducedMotion) {
    const nodes = [...network.querySelectorAll(".hero-node")].map((node, index) => ({
      el: node,
      index,
      x: Number(node.dataset.baseX),
      y: Number(node.dataset.baseY),
      tx: Number(node.dataset.baseX),
      ty: Number(node.dataset.baseY)
    }));
    const links = [...network.querySelectorAll(".hero-link")];
    let pointer = { x: 410, y: 260 };
    let easedPointer = { x: 410, y: 260 };
    let active = false;

    const updatePointer = (event) => {
      const rect = network.getBoundingClientRect();
      pointer = {
        x: ((event.clientX - rect.left) / rect.width) * 820,
        y: ((event.clientY - rect.top) / rect.height) * 520
      };
      active = true;
    };

    const settlePointer = () => {
      active = false;
    };

    document.addEventListener("pointermove", updatePointer, { passive: true });
    document.addEventListener("pointerleave", settlePointer);

    const animate = () => {
      easedPointer.x += (pointer.x - easedPointer.x) * 0.075;
      easedPointer.y += (pointer.y - easedPointer.y) * 0.075;

      nodes.forEach((node) => {
        const dx = node.x - easedPointer.x;
        const dy = node.y - easedPointer.y;
        const distance = Math.max(1, Math.hypot(dx, dy));
        const influence = Math.max(0, 1 - distance / 260);
        const drift = active ? influence * 28 : 0;
        const targetX = node.x + (dx / distance) * drift;
        const targetY = node.y + (dy / distance) * drift;
        node.tx += (targetX - node.tx) * 0.11;
        node.ty += (targetY - node.ty) * 0.11;
        node.el.setAttribute("cx", node.tx.toFixed(2));
        node.el.setAttribute("cy", node.ty.toFixed(2));
        node.el.classList.toggle("is-near", influence > 0.42);
      });

      links.forEach((link) => {
        const a = nodes[Number(link.dataset.a)];
        const b = nodes[Number(link.dataset.b)];
        if (!a || !b) return;
        link.setAttribute("x1", a.tx.toFixed(2));
        link.setAttribute("y1", a.ty.toFixed(2));
        link.setAttribute("x2", b.tx.toFixed(2));
        link.setAttribute("y2", b.ty.toFixed(2));
        link.classList.toggle("is-near", a.el.classList.contains("is-near") || b.el.classList.contains("is-near"));
      });

      requestAnimationFrame(animate);
    };

    animate();
  }

  const stepper = document.querySelector("[data-stepper]");
  if (stepper) {
    stepper.addEventListener("click", (event) => {
      const step = event.target.closest(".step");
      if (!step) return;
      stepper.querySelectorAll(".step").forEach((item) => {
        item.classList.remove("is-active");
        item.setAttribute("aria-pressed", "false");
      });
      step.classList.add("is-active");
      step.setAttribute("aria-pressed", "true");
    });
  }

  const estimator = document.querySelector("[data-estimator]");
  if (estimator) {
    const output = estimator.querySelector("[data-estimate-output]");
    const ranges = {
      small: { simple: [4, 8], moderate: [6, 10], complex: [8, 14] },
      mid: { simple: [6, 10], moderate: [8, 14], complex: [12, 18] },
      large: { simple: [8, 12], moderate: [12, 18], complex: [16, 24] }
    };
    const environmentAdd = { commercial: 0, gcc: 2, gcchigh: 4 };
    const teams = {
      small: "lean architect plus delivery support",
      mid: "architect, maker, analyst, and stakeholder lead",
      large: "architecture lead with delivery, reporting, governance, and transition support"
    };

    const updateEstimate = () => {
      const data = new FormData(estimator);
      const size = data.get("size");
      const complexity = data.get("complexity");
      const environment = data.get("environment");
      const base = ranges[size][complexity];
      const add = environmentAdd[environment];
      const min = base[0] + add;
      const max = base[1] + add;
      output.innerHTML = `<span>Likely shape</span><strong>${min} to ${max} weeks</strong><small>${teams[size]} across discovery, design, build, governance, and transition.</small>`;
    };

    estimator.addEventListener("change", updateEstimate);
    updateEstimate();
  }
})();
