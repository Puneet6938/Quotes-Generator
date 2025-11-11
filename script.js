async function textbox(){

   try{ 
    const response = await fetch('https://api.kanye.rest');
    const data = await response.json();
    document.getElementById('text').innerText = data.quote;
    }catch (error) {
        document.getElementById('text').innerText = "Failed to fetch quote.";
        console.error(error);
    }
}

const button = document.getElementById('new-quote');
button.addEventListener('click', textbox);

const copyButton = document.getElementById('copy-quote');

copyButton.addEventListener('click', () => {
  const quote = document.getElementById('text').innerText;
  navigator.clipboard.writeText(quote)
    .then(() => {
      copyButton.innerText = "✅ Copied!";
      setTimeout(() => copyButton.innerText = "Copy Quote", 1500);
    })
    .catch(err => console.error("Failed to copy:", err));
});

document.addEventListener('DOMContentLoaded', textbox);