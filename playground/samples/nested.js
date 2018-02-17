module.exports = {
  schema: {
    title: "AeroGear Mobile.next",
    type: "object",
    properties: {
      title: {
        type: "string",
        title: "AeroGear",
      },
      services: {
        type: "array",
        title: "Services",
        items: {
          type: "object",
          required: ["title"],
          properties: {
            title: {
              type: "string",
              title: "Title",
              description: "Service",
            },
            repo: {
              type: "string",
              title: "repo",
              description: "Enter the repo details",
            },
            archived: {
              type: "boolean",
              title: "Archived",
              default: false,
            },
            versions: {
              type: "array",
              title: "Versions",
              items: {
                type: "object",
                required: ["version"],
                properties: {
                  version: {
                    type: "string",
                    title: "Version",
                    description: "Version",
                  },
                  tag: {
                    type: "string",
                    title: "tag",
                    description: "Enter the tag details",
                  },
                  archived: {
                    type: "boolean",
                    title: "Archived",
                    default: false,
                  },
                  compatibleVersions: {
                    type: "array",
                    title: "compatibleVersions",
                    items: {
                      type: "object",
                      properties: {
                        Component: {
                          type: "string",
                          title: "Component",
                          description: "Component",
                        },
                        version: {
                          type: "string",
                          title: "Version",
                          description: "Component Version",
                        },
                        tag: {
                          type: "string",
                          title: "tag",
                          description: "Enter the tag details",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      sdk: {
        type: "array",
        title: "SDK",
        items: {
          type: "object",
          required: ["title"],
          properties: {
            title: {
              type: "string",
              title: "Title",
              description: "SDK",
            },
            repo: {
              type: "string",
              title: "repo",
              description: "Enter the repo details",
            },
            archived: {
              type: "boolean",
              title: "Archived",
              default: false,
            },
            versions: {
              type: "array",
              title: "Versions",
              items: {
                type: "object",
                required: ["title"],
                properties: {
                  title: {
                    type: "string",
                    title: "Title",
                    description: "Version",
                  },
                  tag: {
                    type: "string",
                    title: "tag",
                    description: "Enter the tag details",
                  },
                  archived: {
                    type: "boolean",
                    title: "Archived",
                    default: false,
                  },
                },
              },
            },
          },
        },
      },
      other: {
        type: "array",
        title: "Other",
        items: {
          type: "object",
          required: ["title"],
          properties: {
            title: {
              type: "string",
              title: "Title",
              description: "Other",
            },
            repo: {
              type: "string",
              title: "repo",
              description: "Enter the repo details",
            },
            archived: {
              type: "boolean",
              title: "Archived",
              default: false,
            },
            versions: {
              type: "array",
              title: "Versions",
              items: {
                type: "object",
                required: ["title"],
                properties: {
                  title: {
                    type: "string",
                    title: "Title",
                    description: "Version",
                  },
                  tag: {
                    type: "string",
                    title: "tag",
                    description: "Enter the tag details",
                  },
                  archived: {
                    type: "boolean",
                    title: "Archived",
                    default: false,
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  uiSchema: {},
  formData: {
    title: "Mobile.next",
    services: [
      {
        title: "Sync",
        archived: false,
        versions: [
          {
            version: "V1.0",
            tag: "v1.0.4",
            archived: false,
          },
          {
            version: "V1.1",
            tag: "v1.1.4",
            archived: false,
          },
        ],
      },
      {
        title: "Push",
        archived: false,
        versions: [
          {
            version: "V2.0",
            tag: "v2.0.0",
            archived: false,
          },
        ],
      },
    ],
    sdk: [
      {
        title: "Android",
        archived: false,
      },
      {
        title: "iOS",
        archived: false,
      },
      {
        title: "Cordova",
        archived: false,
      },
    ],
    other: [
      {
        title: "Mobile CLI",
        repo: "https://github.com/aerogear/mobile-cli",
        archived: false,
        versions: [
          {
            title: "Preview",
            tag: "v0.0.4",
            archived: false,
          },
        ],
      },
    ],
  },
};
