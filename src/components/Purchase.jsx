import React from "react";
import PartyList from "./PartyList";
function Purchase() {

  const submitPurchaseData = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
  
    console.log(data);
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwi19-uetAEHe1a1uMXBxKCPk9NJ7EAI4iaMXvzvyV4B1ncHIl2uLyVj4O5jJqq21M-/exec"; 
      // your Google Apps Script URL
  
    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",  // Send JSON content
        },
        // body: JSON.stringify(data),
        body: data,
      });
  
      const result = await response.json();
      if (result.status === "success") {
        alert("Data submitted successfully!");
      } else {
        alert("Failed to submit data");
      }
    } catch (error) { 
      console.error("Error:", error);
      alert("An error occurred");
    }
  };

  return (
    <form
      className="w-4/5 mx-auto md:w-1/2 grid gap-4 mb-4"
      onSubmit={submitPurchaseData}
    >
      <PartyList />

      <div className="grid gap-2">
        <label htmlFor="Quantity">Quantity (LTr) :</label>
        <input
          type="text"
          className="border-2 h-10 rounded-md px-3"
          name="Quantity"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="FAT">FAT (%) :</label>
        <input
          type="text"
          className="border-2 h-10 rounded-md px-3"
          name="FAT"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="CLR">CLR :</label>
        <input
          type="text"
          className="border-2 h-10 rounded-md px-3"
          name="CLR"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="Alchol">Alchol (%) :</label>
        <input
          type="text"
          className="border-2 h-10 rounded-md px-3"
          name="Alchol"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="Acid">Acid :</label>
        <input
          type="text"
          className="border-2 h-10 rounded-md px-3"
          name="Acid"
        />
      </div>

      <div className="grid gap-2">
        <h1>Adulteration:</h1>
        <div className="flex gap-4">
          <label>
            <input type="radio" name="Adulteration" value="Yes" />
            Yes
          </label>
          <label>
            <input type="radio" name="Adulteration" value="No" />
            No
          </label>
        </div>
      </div>

      <div className="grid gap-2">
        <label htmlFor="Timestamp">TimeStamp :</label>
        <input
          type="date"
          className="border-2 h-10 rounded-md px-3"
          name="Timestamp"
        />
      </div>

      <div className="grid gap-2">
        <h1>What to do?:</h1>
        <div className="flex gap-4">
          <label>
            <input type="radio" name="What to do?" value="Accept" />
            Accept
          </label>
          <label>
            <input type="radio" name="What to do?" value="Reject" />
            Reject
          </label>
        </div>
      </div>

      <button
        className="border-2 w-fit self-start px-6 py-2 rounded-lg bg-blue-600 text-white font-bold"
        type="submit"
      >
        Save
      </button>
    </form>
  );
}

export default Purchase;
