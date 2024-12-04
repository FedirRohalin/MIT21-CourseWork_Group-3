<template>
  <div class="books_container">
    <div class="search_0">
      <img src="../assets/icons/Search.svg" alt="_search" />
      <input type="search" placeholder="Search" class="text_input_lol" id="searchCurrency" />
    </div>
    <div class="t-stylish">Select crypto from the list of search the one you need</div>
    <div class="books_content hidden">
      <div class="book_content hidden">
        <label class="book_radio">
          <input type="radio" name="bookOption" value="content" class="book_input" />
          <img class="book_icon" src="../assets/icons/Book.svg" alt="Book" />
          <span class="book_content_title">Content</span>
        </label>
      </div>
    </div>
  
    <button class="book_save_button" id="saveCurrency">Save</button>
  </div>
</template>
