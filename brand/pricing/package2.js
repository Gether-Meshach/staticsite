// JSON data structure
const data = {
  packages: [
    {
      title: "Starter",
      description: "Launch your interactive brand world in minutes.",
      cost: "Free",
      features: [
        {
          name: "500 GB storage",
          description: "Storage space for your brand world assets",
        },
        {
          name: "2 GB Egress Bandwidth",
          description: "Monthly data transfer allowance",
        },
        {
          name: "gethertech.io domain",
          description: "Your brand world on our subdomain",
        },
        {
          name: "Hosted Brand world",
          description: "Fully hosted 3D environment",
        },
        {
          name: "DIY Builder, and Content management",
          description:
            "Easy-to-use builder for customizing your 3d world and CMS",
        },
        {
          name: "3D Template Library",
          description: "Access to pre-built 3D templates",
        },
        {
          name: "Google analytics",
          description: "Basic visitor tracking and analytics",
        },
      ],
      topupOptions: [
        "Custom Domain white labeling",
        "Engage Pack",
        "Commerce Pack",
      ],
    },
    {
      title: "Growth / Community Tier",
      description: "Engage customers with events, learning, and commerce.",
      cost: "$399 / Month",
      features: [
        {
          name: "10 GB Storage",
          description: "Storage space for your brand world assets",
        },
        {
          name: "400 GB Egress Bandwidth",
          description: "Monthly data transfer allowance",
        },
        {
          name: "gethertech.io domain",
          description: "Your brand world on our subdomain",
        },
        {
          name: "Hosted Brand world",
          description: "Fully hosted 3D environment",
        },
        {
          name: "DIY Builder, and Content management",
          description:
            "Easy-to-use builder for customizing your 3d world and CMS",
        },
        {
          name: "3D Template Library",
          description: "Access to pre-built 3D templates",
        },
        {
          name: "Platform Analytics",
          description: "Detailed insights and reporting",
        },
        {
          name: "Custom Domain white labeling",
          description: "Use your own domain name",
        },
        {
          name: "Workspace Management",
          description: "Team collaboration tools",
        },
      ],
      topupOptions: ["Engage Pack", "Commerce Pack", "Learn Pack"],
    },
    {
      title: "Business ",
      description: "Run a full-scale customer ecosystem—powered by Gether.",
      cost: "$999 / Month",
      features: [
        {
          name: "30 GB Storage",
          description: "Storage space for your brand world assets",
        },
        {
          name: "1000 GB Egress Bandwidth",
          description: "Monthly data transfer allowance",
        },
        {
          name: "gethertech.io domain",
          description: "Your brand world on our subdomain",
        },
        {
          name: "Hosted Brand world",
          description: "Fully hosted 3D environment",
        },
        {
          name: "DIY Builder, and Content management",
          description:
            "Easy-to-use builder for customizing your 3d world and CMS",
        },
        {
          name: "3D Template Library",
          description: "Access to pre-built 3D templates",
        },
        {
          name: "Platform Analytics",
          description: "Comprehensive analytics platform",
        },
        {
          name: "Custom Domain white labeling",
          description: "Use your own domain name",
        },
        {
          name: "Workspace Management",
          description: "Team collaboration tools",
        },
      ],
      topupOptions: [
        "Engage Pack",
        "Commerce Pack",
        "Learn Pack",
        "Reach Pack",
        "Event Pro",
        "Enterprise Integration Pack",
      ],
    },
  ],
  topupPacks: [
    {
      title: "Custom Domain white labeling",
      cost: "+ $50 / Month",
      features: [
        {
          name: "Custom Domain white labeling",
          description: "Use your own domain name for branding",
        },
      ],
    },
    {
      title: "Engage Pack:",
      cost: "+ $199 / Month",
      features: [
        {
          name: "20,000 Streaming Minutes",
          description: "High-quality video streaming capacity",
        },
        {
          name: "User management and Access control",
          description:
            "Control who can access your brand world, what they can see, and what they can attend. Personalize each user's experience.",
        },
        {
          name: "Meetings",
          description: "Host virtual meetings inside a 3D environment.",
        },
        {
          name: "Live streaming",
          description:
            "Host and broadcast live events, webinars, masterclasses, podcasts, and keynotes.",
        },
        {
          name: "Interactions",
          description:
            "Enhanced user engagement tools including quizzes, polls, surveys, Q&A sessions, treasure hunts, and more.",
        },
      ],
    },
    {
      title: "Reach Pack:",
      cost: "+ $499 / Month",
      features: [
        { name: "UTM tracking", description: "Track campaign performance" },
        {
          name: "Notifications & Communications",
          description: "Automated user communications",
        },
        {
          name: "External Email Client Integration",
          description: "Connect with your email provider",
        },
        { name: "Email Builder", description: "Create custom email campaigns" },
        { name: "Team Management", description: "Manage your marketing team" },
      ],
    },
    {
      title: "Commerce Pack",
      cost: "+ $499 / Month",
      features: [
        {
          name: "E-commerce",
          description: "Sell products in your brand world",
        },
        {
          name: "Payment Gateway integration",
          description: "Accept payments securely",
        },
        {
          name: "Advanced analytics",
          description: "Track sales and customer behavior",
        },
        { name: "Team Management", description: "Manage your sales team" },
        { name: "Priority Support", description: "Get help when you need it" },
      ],
    },
    {
      title: "Learn Pack:",
      cost: "+ $799 / Month",
      features: [
        {
          name: "Learning Management System (LMS)",
          description: "Create and deliver training courses",
        },
        {
          name: "Gamification",
          description: "Engage learners with game mechanics",
        },
        {
          name: "Advanced analytics",
          description: "Track learner progress and performance",
        },
      ],
    },
    {
      title: "Enterprise Integration Pack",
      cost: "+ $799 / Month",
      features: [
        {
          name: "Workspace white labeling",
          description: "Complete brand customization",
        },
        {
          name: "SSO integration",
          description: "Single sign-on for your organization",
        },
        {
          name: "Zoom integration",
          description: "Connect with Zoom for meetings",
        },
        { name: "CRM integration", description: "Sync with your CRM system" },
        {
          name: "LMS integration",
          description: "Connect with external LMS platforms",
        },
      ],
    },
    {
      title: "Event Pro",
      cost: "+ $1999 / Month",
      features: [
        { name: "Event world", description: "Dedicated space for events" },
        {
          name: "Event DIY Builder, and Content management",
          description: "Build and manage event content",
        },
        {
          name: "Event World Template",
          description: "Pre-built event world templates",
        },
        { name: "Scheduler", description: "Schedule and manage events" },
        {
          name: "Event wise user management",
          description: "Manage attendees per event",
        },
        {
          name: "Team Roles Management",
          description: "Define roles and permissions",
        },
        { name: "Advanced analytics", description: "Track event performance" },
        { name: "Priority Support", description: "Dedicated event support" },
      ],
    },
  ],
};

// Render main packages
function renderPackages() {
  const container = document.getElementById("packages-container");

  data.packages.forEach((pkg) => {
    const column = document.createElement("div");
    column.style.flex = "1";
    column.className = "column";

    // Title
    const title = document.createElement("h2");
    title.textContent = pkg.title;
    column.appendChild(title);

    // Description
    const description = document.createElement("div");
    description.className = "div";
    description.textContent = pkg.description;
    column.appendChild(description);

    // Cost
    const cost = document.createElement("div");
    cost.className = "div cost";
    cost.textContent = pkg.cost;
    column.appendChild(cost);

    // Features list
    const listWrapper = document.createElement("div");
    listWrapper.className = "div listWrapper";
    pkg.features.forEach((feature) => {
      const featureDiv = document.createElement("div");
      featureDiv.style.position = "relative";
      featureDiv.style.display = "flex";
      featureDiv.style.alignItems = "center";
      featureDiv.style.justifyContent = "space-between";

      const featureName = document.createElement("span");
      featureName.textContent = feature.name;
      featureDiv.appendChild(featureName);

      // Create help icon
      const helpIcon = document.createElement("span");
      helpIcon.className = "help-icon";
      helpIcon.textContent = "?";
      helpIcon.style.marginLeft = "8px";

      // Create overlay
      const overlay = document.createElement("div");
      overlay.className = "help-overlay";
      overlay.style.width = "200px";

      const overlayTitle = document.createElement("h3");
      overlayTitle.textContent = feature.name;
      overlayTitle.style.margin = "0 0 8px 0";
      overlayTitle.style.fontSize = "14px";
      overlayTitle.style.fontWeight = "bold";
      overlay.appendChild(overlayTitle);

      const overlayText = document.createElement("p");
      overlayText.textContent = feature.description;
      overlayText.style.margin = "0";
      overlayText.style.fontSize = "13px";
      overlay.appendChild(overlayText);

      // Add hover events
      helpIcon.addEventListener("mouseenter", () => {
        overlay.classList.add("show");
      });

      helpIcon.addEventListener("mouseleave", () => {
        overlay.classList.remove("show");
      });

      featureDiv.appendChild(helpIcon);
      featureDiv.appendChild(overlay);

      listWrapper.appendChild(featureDiv);
    });
    column.appendChild(listWrapper);

    // Top-up options (if any)
    if (pkg.topupOptions.length > 0) {
      const topupWrapper = document.createElement("div");
      topupWrapper.className = "topupWrapper";

      const topupTitle = document.createElement("div");
      topupTitle.className = "topup";
      topupTitle.textContent = "Top-up options";
      topupWrapper.appendChild(topupTitle);

      pkg.topupOptions.forEach((option) => {
        const optionDiv = document.createElement("div");
        optionDiv.className = "bg_b";

        // Create a container for text and icon
        const textSpan = document.createElement("span");
        textSpan.textContent = option;
        optionDiv.appendChild(textSpan);

        // Find matching topup pack details
        const optionName = option
          .replace(/\s*\|.*$/, "")
          .trim()
          .replace(/:$/, "");
        const matchingPack = data.topupPacks.find(
          (pack) => pack.title.replace(/:$/, "").trim() === optionName
        );

        if (matchingPack) {
          // Create help icon
          const helpIcon = document.createElement("span");
          helpIcon.className = "help-icon";
          helpIcon.textContent = "?";

          // Create overlay
          const overlay = document.createElement("div");
          overlay.className = "help-overlay";

          const overlayTitle = document.createElement("h3");
          overlayTitle.textContent = matchingPack.title;
          overlay.appendChild(overlayTitle);

          const overlayCost = document.createElement("div");
          overlayCost.className = "overlay-cost";
          overlayCost.textContent = matchingPack.cost;
          overlay.appendChild(overlayCost);

          const featuresList = document.createElement("ul");
          matchingPack.features.forEach((feature) => {
            const li = document.createElement("li");
            li.textContent = feature.name;
            li.title = feature.description; // Add description as tooltip
            featuresList.appendChild(li);
          });
          overlay.appendChild(featuresList);

          // Add hover events
          helpIcon.addEventListener("mouseenter", () => {
            overlay.classList.add("show");
          });

          helpIcon.addEventListener("mouseleave", () => {
            overlay.classList.remove("show");
          });

          optionDiv.appendChild(helpIcon);
          optionDiv.appendChild(overlay);
        }

        topupWrapper.appendChild(optionDiv);
      });

      column.appendChild(topupWrapper);
    }

    container.appendChild(column);
  });
}

// Render top-up cards
function renderTopupCards() {
  const container = document.getElementById("topup-cards");

  data.topupPacks.forEach((pack) => {
    const card = document.createElement("div");
    card.className = "card";

    // Title
    const title = document.createElement("h2");
    title.textContent = pack.title;
    card.appendChild(title);

    // Cost
    const cost = document.createElement("div");
    cost.className = "cost";
    cost.textContent = pack.cost;
    card.appendChild(cost);

    // Features list
    const listWrapper = document.createElement("div");
    listWrapper.className = "div listWrapper";
    pack.features.forEach((feature) => {
      const featureDiv = document.createElement("div");
      featureDiv.style.position = "relative";
      featureDiv.style.display = "flex";
      featureDiv.style.alignItems = "center";
      featureDiv.style.justifyContent = "space-between";

      const featureName = document.createElement("span");
      featureName.textContent = feature.name;
      featureDiv.appendChild(featureName);

      // Create help icon
      const helpIcon = document.createElement("span");
      helpIcon.className = "help-icon";
      helpIcon.textContent = "?";
      helpIcon.style.marginLeft = "8px";

      // Create overlay
      const overlay = document.createElement("div");
      overlay.className = "help-overlay";
      overlay.style.width = "200px";

      const overlayTitle = document.createElement("h3");
      overlayTitle.textContent = feature.name;
      overlayTitle.style.margin = "0 0 8px 0";
      overlayTitle.style.fontSize = "14px";
      overlayTitle.style.fontWeight = "bold";
      overlay.appendChild(overlayTitle);

      const overlayText = document.createElement("p");
      overlayText.textContent = feature.description;
      overlayText.style.margin = "0";
      overlayText.style.fontSize = "13px";
      overlay.appendChild(overlayText);

      // Add hover events
      helpIcon.addEventListener("mouseenter", () => {
        overlay.classList.add("show");
      });

      helpIcon.addEventListener("mouseleave", () => {
        overlay.classList.remove("show");
      });

      featureDiv.appendChild(helpIcon);
      featureDiv.appendChild(overlay);

      listWrapper.appendChild(featureDiv);
    });
    card.appendChild(listWrapper);

    container.appendChild(card);
  });
}

// Initialize rendering
renderPackages();
renderTopupCards();
