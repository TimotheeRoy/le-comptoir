const url = "https://api-le-comptoir-h3gtivixb-tiimooys-projects.vercel.app/";

export async function getMeubles() {
    //sert à update la valeur de data
    const res = await fetch(url + "meubles");
    const meubles = await res.json();
    return meubles;
}

export async function handleLogin(email, password) {
    const response = await fetch(url + "signin", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (data.hasOwnProperty("users")) {
        return true;
    } else {
        throw console.error("Mauvais mail ou mdp");
    }
}

export async function getData() {
    const res = await fetch(url + "admin");
    const meubles = await res.json();
    return meubles;
}
