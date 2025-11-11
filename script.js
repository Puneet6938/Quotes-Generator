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

