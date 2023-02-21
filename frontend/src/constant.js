// development constant
const dev = {
    // API root IP
    rootApiIP : "http://140.116.214.154:3000/api",
    // frontend url prefix
    rootPathPrefix : ""
}

// production constant
const prod = {
    rootApiIP : "http://cosbi5.ee.ncku.edu.tw/api",
    rootPathPrefix : "/financial"
}

export const config = process.env.NODE_ENV === "development" ? dev : prod