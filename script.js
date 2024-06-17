document.addEventListener('DOMContentLoaded', () => {
    const addItemButton = document.getElementById('addItemButton');
    const itemInput = document.getElementById('itemInput');
    const itemList = document.getElementById('itemList');
    const itemCount = document.getElementById('itemCount');

    const updateItemCount = () => {
        itemCount.textContent = itemList.children.length;
    };

    const createListItem = (itemText) => {
        const listItem = document.createElement('li');
        listItem.textContent = itemText;

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-btn';
        deleteButton.innerHTML = '<i class="bi bi-trash"></i>';
        deleteButton.addEventListener('click', () => {
            itemList.removeChild(listItem);
            updateItemCount();
        });

        listItem.appendChild(deleteButton);
        return listItem;
    };

    addItemButton.addEventListener('click', () => {
        const itemText = itemInput.value.trim();
        if (itemText !== '') {
            const listItem = createListItem(itemText);
            itemList.appendChild(listItem);
            itemInput.value = '';
            itemInput.focus();
            updateItemCount();
        }
    });

    itemInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addItemButton.click();
        }
    });
});
