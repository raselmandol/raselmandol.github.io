// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "I have one accepted paper at the 7th International Conference on Data Analytics and Cyber Security (DACS 2024), which has been submitted for publication in SN Computer Science journal. I am currently preparing to submit several other completed and ongoing manuscripts to reputed journals.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "This list is not a complete list of my projects that I have completed or ongoing; still, I am trying to include most of them here and will try to share updates about them frequently.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This is an overview of my activities and skills. Though it doesn&#39;t cover the full range of what I know or what I do, it mostly includes what I work with. Please find my CV/details on this page.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-people",
          title: "people",
          description: "I have had the opportunity to work with and under incredibly talented and intellectual individuals and supervisors, and I am currently collaborating with some equally talented people.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "post-mind-is-the-39-real-39-39-infinity-39",
        
          title: "Mind is the &#39;real&#39; &#39;infinity&#39;",
        
        description: "Thoughts on how the human brain works",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/brain/";
          
        },
      },{id: "news-the-manuscript-titled-enhanced-qc-using-single-particle-state-rotation-was-accepted-at-dacs-2024",
          title: 'The manuscript (titled: Enhanced QC Using Single-Particle State Rotation) was accepted at DACS...',
          description: "",
          section: "News",},{id: "news-deleted-several-social-site-accounts",
          title: 'Deleted several social site accounts',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-my-ongoing-research-on-medical-mri-image-segmentation-using-deep-learning-on-resource-constrained-devices-phase-3-was-successful-sparkles",
          title: 'My ongoing research on Medical MRI Image segmentation using Deep Learning on resource-constrained...',
          description: "",
          section: "News",},{id: "projects-chatgpt-conversation-heatmap",
          title: 'ChatGPT Conversation Heatmap',
          description: "This project visualizes ChatGPT conversation activity in a GitHub-style heatmap.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/chatgpt_heatmap/";
            },},{id: "projects-comprehensive-rust-bn-translated",
          title: 'Comprehensive Rust - bn translated',
          description: "This is the Rust course used by the Android team at Google. I have translated part of it into Bengali.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/comprehensive_rust_bn/";
            },},{id: "projects-comprehensive-rust-bn",
          title: 'Comprehensive Rust-bn',
          description: "Desktop application for Comprehensive Rust-bn built using electron js.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/comprehensive_rust_desktop/";
            },},{id: "projects-gptdesk",
          title: 'gptDesk',
          description: "This desktop application leverages the power of ChatGPT",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gpt_desk/";
            },},{id: "projects-depth-resnet-polyp-image-classification-tool",
          title: 'Depth-ResNet – Polyp Image Classification Tool',
          description: "DepthResNet – Polyp Image Classification Tool using Depth-ResNet (Cross-Platform)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/polyps_classification/";
            },},{id: "projects-quantum-cryptography",
          title: 'Quantum Cryptography',
          description: "This research explores improving Quantum Cryptography through single particle state rotation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/quantum_cryp/";
            },},{id: "projects-lumbosacral-spine-mri-segmentation",
          title: 'Lumbosacral Spine MRI Segmentation',
          description: "Lumbosacral spine MRI segmentation and fracture assessment.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/spine_mri/";
            },},{id: "projects-mri-seg-tool-cross-platform",
          title: 'MRI-SEG Tool (Cross-Platform)',
          description: "MRI-SEG, Spine MRI Segmentation and Classification Tool (Cross-Platform)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/spine_mri_package/";
            },},{id: "projects-mri-seg-lite-lightweight-spine-mri-segmentation",
          title: 'MRI-SEG Lite - Lightweight Spine MRI Segmentation',
          description: "MRI SEG Lite – Lightweight Spine MRI Segmentation for Edge Devices (R-Pi &amp; all.)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/spine_mri_rc/";
            },},{id: "projects-sqlmap-gui",
          title: 'sqlmap-gui',
          description: "GUI for SQLMAP, a powerful tool for automated SQL injection",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sqlmap_gui/";
            },},{id: "projects-ub-gui",
          title: 'UB GUI',
          description: "UB GUI is a desktop application to give windows a look of Ubuntu.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ub_gui/";
            },},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/raselmandol.bsky.social", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72%61%73%6C%6D@%64%75%63%6B.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/raselmandol", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/raselmandol", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
