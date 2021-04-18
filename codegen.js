module.exports = {
  schema: [
    {
      [process.env.API_URL]: {
        headers: {
          "X-Hasura-Admin-Secret": process.env.HASURA_ADMIN_SECRET,
        },
      },
    },
  ],
  documents: ["./src/graphql/*.graphql"],
  overwrite: true,
  generates: {
    "./src/@types/codegen/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
        apolloReactHooksImportFrom: "@apollo/client",
      },
    },
    // "./src/@types/codegen/page.tsx": {
    //   config: {
    //     documentMode: "external",
    //     importDocumentNodeExternallyFrom: "./graphql",
    //     withHOC: false,
    //     apolloImportFrom: "@apollo/client",
    //     apolloCacheImportFrom: "@apollo/client",
    //   },
    //   preset: "import-types",
    //   presetConfig: {
    //     typesPath: "./graphql",
    //   },
    //   plugins: ["graphql-codegen-apollo-next-ssr"],
    // },
  },
  hooks: {
    afterAllFileWrite: ["prettier --write"],
  },
};
