const WEB_APP_URL =
"https://script.google.com/macros/s/AKfycbzpKj2GxOiRpxxJIRYgQYwJ-HgyLuiUwgS5RuvLuiZdjfJ3cAZAeGNR3nYg5dqNBj6P/exec";

async function submitLead() {

    const button = document.querySelector("button");

    const data = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        businessType: document.getElementById("businessType").value,
        budget: document.getElementById("budget").value,
        requirement: document.getElementById("requirement").value
    };

    if (
        !data.name ||
        !data.phone ||
        !data.email ||
        !data.businessType ||
        !data.budget ||
        !data.requirement
    ) {
        alert("Please fill all fields");
        return;
    }

    button.innerHTML = "⏳ Submitting...";
    button.disabled = true;

    try {

        await fetch(WEB_APP_URL, {
            method: "POST",
            body: JSON.stringify(data)
        });

        const message = document.getElementById("message");

        message.style.display = "block";

        message.innerHTML =
            "✅ Lead Submitted Successfully! We will contact you shortly.";

        document.getElementById("name").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("email").value = "";
        document.getElementById("businessType").selectedIndex = 0;
        document.getElementById("budget").selectedIndex = 0;
        document.getElementById("requirement").value = "";

    } catch (error) {

        alert("Submission Failed");

    }

    button.innerHTML = "🚀 Submit Lead";
    button.disabled = false;
}