const axios = require('axios').default;

function randomer() {
    return new Promise((resolve, reject) => {
        const tmpRes = "[{ \"title\": \"halo\", \"paragraph\": \"# 中您将学习如何使用 \\n ## Bootstrap工具包来创建基于导航、标签、胶囊式标签的导航。我们有演示实例及相关的解释,包括:基本\", \"timestamp\": 1596111384 }, { \"title\": \"halo\", \"paragraph\": \"中,您将学习如何使用Bootstrap工具包来创建基于导航、标签、胶囊式标签的导航。我们有演示实例及相关的解释,包括:基本\", \"timestamp\": 1596716046000 },{ \"title\": \"halo\", \"paragraph\": \"中,您将学习如何使用Bootstrap工具包来创建基于导航、标签、胶囊式标签的导航。我们有演示实例及相关的解释,包括:基本\", \"timestamp\": 1596716046000 }, { \"title\": \"halo\", \"paragraph\": \"中,您将学习如何使用Bootstrap工具包来创建基于导航、标签、胶囊式标签的导航。我们有演示实例及相关的解释,包括:基本\", \"timestamp\": 1596716046000 }, { \"title\": \"halo\", \"paragraph\": \"中,您将学习如何使用Bootstrap工具包来创建基于导航、标签、胶囊式标签的导航。我们有演示实例及相关的解释,包括:基本\", \"timestamp\": 1596716046000 }, { \"title\": \"halo\", \"paragraph\": \"中,您将学习如何使用Bootstrap工具包来创建基于导航、标签、胶囊式标签的导航。我们有演示实例及相关的解释,包括:基本\", \"timestamp\": 1596716046000 }, { \"title\": \"halo\", \"paragraph\": \"中,您将学习如何使用Bootstrap工具包来创建基于导航、标签、胶囊式标签的导航。我们有演示实例及相关的解释,包括:基本\", \"timestamp\": 1596716046000 }, { \"title\": \"halo\", \"paragraph\": \"中,您将学习如何使用Bootstrap工具包来创建基于导航、标签、胶囊式标签的导航。我们有演示实例及相关的解释,包括:基本\", \"timestamp\": 1596716046000, \"title\": \"halo\", \"paragraph\": \"中,您将学习如何使用Bootstrap工具包来创建基于导航、标签、胶囊式标签的导航。我们有演示实例及相关的解释,包括:基本\", \"timestamp\": 1596111384 }, { \"title\": \"halo\", \"paragraph\": \"中,您将学习如何使用Bootstrap工具包来创建基于导航、标签、胶囊式标签的导航。我们有演示实例及相关的解释,包括:基本\", \"timestamp\": 1596716046000 }, { \"title\": \"halo\", \"paragraph\": \"中,您将学习如何使用Bootstrap工具包来创建基于导航、标签、胶囊式标签的导航。我们有演示实例及相关的解释,包括:基本\", \"timestamp\": 1596716046000 }, { \"title\": \"halo\", \"paragraph\": \"中,您将学习如何使用Bootstrap工具包来创建基于导航、标签、胶囊式标签的导航。我们有演示实例及相关的解释,包括:基本\", \"timestamp\": 1596716046000 }, { \"title\": \"halo\", \"paragraph\": \"中,您将学习如何使用Bootstrap工具包来创建基于导航、标签、胶囊式标签的导航。我们有演示实例及相关的解释,包括:基本\", \"timestamp\": 1596716046000 }, { \"title\": \"halo\", \"paragraph\": \"中,您将学习如何使用Bootstrap工具包来创建基于导航、标签、胶囊式标签的导航。我们有演示实例及相关的解释,包括:基本\", \"timestamp\": 1596716046000 }, { \"title\": \"halo\", \"paragraph\": \"中,您将学习如何使用Bootstrap工具包来创建基于导航、标签、胶囊式标签的导航。我们有演示实例及相关的解释,包括:基本\", \"timestamp\": 1596716046000 }, { \"title\": \"halo\", \"paragraph\": \"中,您将学习如何使用Bootstrap工具包来创建基于导航、标签、胶囊式标签的导航。我们有演示实例及相关的解释,包括:基本\", \"timestamp\": 1596716046000 }]";
        if (Math.random() <= 1) resolve(tmpRes);
        else reject(403);
    });
}

export const mockClient = {
    getDoc() {
        return new Promise((resolve, reject) => {
            randomer().then(v => resolve(JSON.parse(v))).catch(v => reject(v));
            // fetch("/doc").then(resp => resolve(JSON.parse(resp))).catch(reason => resolve(reason));
        });
    },
    deleteDoc(title) {
        return new Promise((resolve, reject) => {
            randomer().then(v => resolve(JSON.parse(v))).catch(v => reject(v));
        });
    },
    updateDoc(title, para) {
        return new Promise((resolve, reject) => {
            const t = Math.random();
            var code = 200, msg = "SUCCESS";
            if (t > 1) { code = 400; msg = "DOC_EXISTED"; }
            else if (t >1 ) { code = 401; msg = "DOC_NOT_FOUND"; }
            const ret = { code: code, message: msg };
            if (code !== 200)
                reject(ret);
            else
                resolve(ret);
        });
    }
};

export function getDoc() {
    return new Promise((resolve, reject) => {
        fetch("/doc").then(resp => resolve(JSON.parse(resp))).catch(reason => resolve(reason));
    });
}

export function deleteDoc(title) {
    return new Promise((resolve, reject) => {
        postMessage("/delete?title=" + title)
            .then(v => resolve(JSON.parse(v)))
            .catch(v => reject(v));
    });
}

export function updateDoc(title, paragraph) {
    return new Promise((resolve, reject) => {
        axios.post('/update', { title: title, paragraph: paragraph })
            .then(v => resolve(JSON.parse(v)))
            .catch(v => reject(JSON.parse(v)));
    });
}

