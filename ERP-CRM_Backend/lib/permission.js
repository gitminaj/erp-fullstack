export const setPermissionsBasedOnRole = (roleName) => {
  let permissions = [];

  if (roleName === "Administrator") {
    permissions = [
      {
        lead: {
          view: true,
          menu: true,
          create: true,
          update: true,
          delete: true,
        },
        user: {
          view: true,
          create: true,
          update: true,
          delete: true,
        },
        auditor: {
          view: true,
          create: true,
          update: true,
          delete: true,
        }
      },
    ]
  }

  if (roleName === "Business Development Executive") {
    permissions = [
      {
        lead: {
          view: true,
          menu: true,
          create: true,
          update: true,
          delete: true,
        },
        user: {
          view: true,
          create: true,
          update: true,
          delete: true,
        },
      },
    ];
  } else if (roleName === "Administrator") {
    permissions = [
      {
        lead: {
          view: true,
          menu: true,
          create: true,
          update: true,
          delete: true,
        },
        user: {
          view: true,
          create: true,
          update: true,
          delete: true,
        },
      },
    ];
  }

  if (roleName === "Zonal Heads") {
    permissions = [
      {
        lead: {
          view: false,
          menu: false,
          create: false,
          update: false,
          delete: false,
        },
        user: {
          view: true,
          create: true,
          update: true,
          delete: true,
        },
      },
    ];
  }

  if (roleName === "Zonal Planner") {
    permissions = [
      {
        lead: {
          view: false,
          menu: false,
          create: false,
          update: false,
          delete: false,
        },
        user: {
          view: true,
          create: true,
          update: true,
          delete: true,
        },
      },
    ];
  }

  if (roleName === "Auditor") {
    permissions = [
      {
        lead: {
          view: false,
          menu: false,
          create: false,
          update: false,
          delete: false,
        },
        user: {
          view: true,
          create: true,
          update: false,
          delete: false,
        },
      },
    ];
  }

  if (roleName === "Accreditation Controller") {
    permissions = [
      {
        lead: {
          view: false,
          menu: false,
          create: false,
          update: false,
          delete: false,
        },
        user: {
          view: true,
          create: true,
          update: true,
          delete: true,
        },
      },
    ];
  }

  if (roleName === "Technical Reviewer") {
    permissions = [
      {
        lead: {
          view: false,
          menu: false,
          create: false,
          update: false,
          delete: false,
        },
        user: {
          view: true,
          create: true,
          update: true,
          delete: true,
        },
      },
    ];
  }


  if (roleName === "Contract Reviewer") {
    permissions = [
      {
        lead: {
          view: false,
          menu: false,
          create: false,
          update: false,
          delete: false,
        },
        user: {
          view: true,
          create: true,
          update: true,
          delete: true,
        },
      },
    ];
  }

  if (roleName === "Audit Planner") {
    permissions = [
      {
        lead: {
          view: false,
          menu: false,
          create: false,
          update: false,
          delete: false,
        },
        user: {
          view: true,
          create: true,
          update: true,
          delete: true,
        },
      },
    ];
  }

  if (roleName === "Accreditation Head") {
    permissions = [
      {
        lead: {
          view: false,
          menu: false,
          create: false,
          update: false,
          delete: false,
        },
        user: {
          view: true,
          create: true,
          update: true,
          delete: true,
        }
      },
    ];
  }

  if (roleName === "AAF(Approval)") {
    permissions = [
      {
        lead: {
          view: false,
          menu: false,
          create: false,
          update: false,
          delete: false,
        },
        user: {
          view: true,
          create: true,
          update: true,
          delete: true,
        }
      },
    ];
  }


  if (roleName === "Client") {
    permissions = [
      {
        lead: {
          view: true,
          menu: true,
          create: true,
          update: true,
          delete: true,
        },
        auditor: {
          view: true,
          create: true,
          update: true,
          delete: true,
        }
      },
    ]
  }


  if (roleName === "Regional head") {
    permissions = [
      {
        lead: {
          view: true,
          menu: true,
          create: true,
          update: true,
          delete: true,
        },
        auditor: {
          view: true,
          create: true,
          update: true,
          delete: true,
        }
      },
    ]
  }

  if (roleName === "Decision Maker") {
    permissions = [
      {
        lead: {
          view: true,
          menu: true,
          create: true,
          update: true,
          delete: true,
        },
        auditor: {
          view: true,
          create: true,
          update: true,
          delete: true,
        }
      },
    ]
  }
  
  if (roleName === "Certificate Controller") {
    permissions = [
      {
        lead: {
          view: true,
          menu: true,
          create: true,
          update: true,
          delete: true,
        },
        auditor: {
          view: true,
          create: true,
          update: true,
          delete: true,
        }
      },
    ]
  }

  return permissions;
};
