document.addEventListener('DOMContentLoaded', () => {
    const urlInput = document.getElementById('urlInput');
    const titleInput = document.getElementById('titleInput');
    const addButton = document.getElementById('addButton');
    const linkList = document.getElementById('linkList');

    // Function to create a list item for a link
    function createListItem(url, title) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <a href="${url}" target="_blank">${title}</a>
            <div>
                <button class="edit"><i class="fas fa-pencil-alt"></i></button>
                <button class="delete"><i class="fas fa-times"></i></button>
            </div>
        `;

        // Add delete functionality
        listItem.querySelector('.delete').addEventListener('click', () => {
            linkList.removeChild(listItem);
        });

        // Add edit functionality
        listItem.querySelector('.edit').addEventListener('click', () => {
            urlInput.value = url;
            titleInput.value = title;
            linkList.removeChild(listItem);
        });

        return listItem;
    }

    // Add a new link
    addButton.addEventListener('click', () => {
        const url = urlInput.value.trim();
        const title = titleInput.value.trim();

        if (url && title) {
            const listItem = createListItem(url, title);
            linkList.appendChild(listItem);
            urlInput.value = '';
            titleInput.value = '';
        } else {
            alert('Please enter both a URL and a title.');
        }
    });

    // Optionally, handle Enter key for adding links
    urlInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addButton.click();
        }
    });

    titleInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addButton.click();
        }
    });
});
