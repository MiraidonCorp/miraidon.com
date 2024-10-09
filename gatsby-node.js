exports.createPages = ({ actions }) => {
    const { createSlice } = actions
    createSlice({
      id: "header",
      component: require.resolve("./src/components/header/header.tsx"),
    })
    createSlice({
      id: "footer",
      component: require.resolve("./src/components/footer/footer.tsx"),
    })
  }
