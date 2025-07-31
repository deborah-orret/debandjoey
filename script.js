// JavaScript goes here!
 document.getElementById('rsvp-form').addEventListener('submit', async function (e) {
    e.preventDefault();
    const form = e.target;

    // Collect all checked boxes into a comma-separated string
    const diets = Array.from(form.querySelectorAll('input[name="diet"]:checked'))
      .map(cb => cb.value)
      .join(', ');

    const data = {
      name: form.name.value,
      email: form.email.value,
      attending: form.attending.value,
      diet: diets,
      comments: form.comments.value
    };

    try {
      const response = await fetch('https://sheetdb.io/api/v1/n0c4lsh33022x', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data })
      });

      if (response.ok) {
        form.reset();
        document.getElementById('rsvp-confirmation').textContent = "Thank you for your RSVP!";
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (err) {
      alert("Network error. Please try again.");
    }
  });