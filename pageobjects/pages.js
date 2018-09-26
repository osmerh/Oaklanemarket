module.exports = {
    url: 'http://oaklanemarket.com/',
    elements: {
        homeButton: {
            selector: 'span[class="header-logo-text"]',
            locateStrategy: 'css selector'
        },

        shopAll: 'a[href="http://oaklanemarket.com/shop-all/"]',
        tops: 'a[href="http://oaklanemarket.com/tops/"]',
        bottoms: 'a[href="http://oaklanemarket.com/bottoms/"]',
        jumpSuits: 'a[href="http://oaklanemarket.com/jumpsuits/"]',
        dressSkirt: 'a[href="http://oaklanemarket.com/dresses-skirts/"]',
        shoes: 'a[href="http://oaklanemarket.com/shoes/"]',
        accessories: 'a[href="http://oaklanemarket.com/accessories/"]',
        artwork: 'a[href="http://oaklanemarket.com/baby/"]',
        search: 'a[aria-controls="quickSearch"]',
        signIn: {
            selector: ('(//a[text()="Sign in"])[@class="navUser-action"]'),
            locateStrategy: 'xpath'
        },
        register: 'a[href="/login.php?action=create_account"]',
        cart: 'a[href="/cart.php"]',
        email: 'input[name="login_email"]',
        password: 'input[name="login_pass"]',
        signInButton: 'input[value="Sign in"]',
        searchBar: {
            selector: ('(//input[@name="search_query"])[1]'),
            locateStrategy: 'xpath'
        },
        header: 'h1[class="page-heading"]',
        andyTop: 'label[for="compare-226"]',
        crochetTop: {
            selector: '(//ul/li[@class="product"])[1]',
            locateStrategy: 'xpath'
        },
        // crochetTop: 'img[title="Addy Crochet Top"]',
        floralTop: 'label[for="compare-202"]',
        aidenTop: 'img[title="Aiden Floral Top"]',
        compare: 'a[href="/compare/226/202"]',
        small: 'label[for="attribute_99"]',
        medium: 'label[for="attribute_100"]',
        large: 'label[for="attribute_101"]',
        addToCart: 'input[id="form-action-addToCart"]',
        quantityInc: 'button[data-action="inc"]',
        quantityDec: 'button[data-action="dec"]',
        productDetails: 'div[class="productView-details"]',
        closeX: {
            selector: ('(//a[@class="modal-close"])[3]'),
            locateStrategy: 'xpath'
        },
        cartButton: {
            selector: ('(//a[@class="navUser-action"])[4]'),
            locateStrategy: 'xpath'
        },
        storePickUp: 'label[for="shippingOptionRadio-3eff76d4-bf55-4d90-9b7a-e2a04220684b"]',
        continueButton: 'button[type="submit"]',
        placeOrder: 'button[id="checkout-payment-continue"]',
        viewCart: 'a[class="button button--small button--action"]',
        changeSize: 'a[data-item-edit="bb7b23bc-6eb6-4c32-a674-79a39888cfbd"]',
        deleteItem: 'a[class="cart-remove icon"]',
        okButton: 'button[class="swal2-confirm button"]',
        cancelButton: 'button[class="swal2-cancel button"]',
        popUp: 'a[class="soundest-form-without-image-close "]',
    }
}