import App from "./app";

async function boostrap() {
    const app = new App();
    app.listen(3000);
}

boostrap();