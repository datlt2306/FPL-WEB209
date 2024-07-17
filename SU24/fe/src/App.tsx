import Router from "./routes";
function App() {
    return (
        <>
            <Router />
        </>
    );
}

export default App;

// B1: npm i antd @ant-design/cssinjs
// B2: truy cập file main.js và thay đổi như sau:
// Sử dụng <StyleProvider layer> từ @ant-design/cssinjs để wrap toàn bộ ứng dụng
// B3: truy cập file global.css và thêm dòng sau:
// B4: sử dụng component antd
