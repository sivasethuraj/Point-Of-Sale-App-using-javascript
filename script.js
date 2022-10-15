// $( this ).off( 'click' );
if ( typeof ( Storage !== 'undefined' ) ) {

    const items = {

        fruits: {
            name: [ 'apple', 'orange', 'banana', 'guava', 'grapes' ],
            price: [ 100, 90, 86, 10, 34 ],
        },
        vegetarion: {
            name: [ 'pappardale', 'tofuskewers', 'barleyposole', 'Broccolini', 'GarlicFrittata' ],
            price: [ 130, 190, 186, 110, 134 ],
        },
        nonVegetarion: {
            name: [ 'Grilled Chicken', 'Mutton', 'Malabar Fish Biryani', 'Keema Samosa', 'Curried Parmesan Fish' ],
            price: [ 200, 290, 286, 210, 234 ],
        },
        coolDrinks: {
            name: [ 'Coca Cola', 'Pepsi', 'Sprite', 'ThumsUp', 'Fanta' ],
            price: [ 10, 15, 16, 13, 14 ],
        },
        tea: {
            name: [ 'green tea', 'Assam tea', 'White tea', 'Darjeeling Tea', 'Masala Tea' ],
            price: [ 50, 40, 56, 60, 24 ],
        },
        noodles: {
            name: [ 'Cup Noodles', 'Rice noodles.', 'Fried noodles', 'Frozen noodles', 'Instant noodle' ],
            price: [ 163, 145, 164, 143, 145 ],
        },
        dumplings: {
            name: [ 'Potstickers', 'Potstickers', 'Soup Dumplings', 'Pan-Fried Dumplings', 'Wontons' ],
            price: [ 65, 54, 46, 35, 43 ],
        },
        iceCream: {
            name: [ 'Chocolate ', 'Vanilla ', 'Mint Chocolate Chip ', 'Cookie Dough ', 'Buttered Pecan' ],
            price: [ 40, 70, 56, 60, 56 ],
        },

    };

    // localStorage.setItem()
}

$( '#veg ' ).hide()
$( '#nonveg ' ).hide()
$( '#snacks ' ).hide()
$( '#tea ' ).hide()
$( '#noodles ' ).hide()
$( '#dumplings ' ).hide()
$( '#icecreams ' ).hide()
$( '#fruits ' ).hide()
$( '#starchy ' ).hide()
$( '#cooldrinks ' ).hide()

function changeImage ( element ) {

    console.log( element );
    const elementId = element.id;
    console.log( 'id :', elementId );

    if ( elementId == 'veg-btn' ) {
        $( '#veg' ).show();

    } else {
        $( '#veg' ).hide()
    }
    if ( elementId == 'nonveg-btn' ) {
        $( '#nonveg' ).show();

    } else {
        $( '#nonveg' ).hide()
    }
    if ( elementId == 'cooldrinks-btn' ) {
        $( '#cooldrinks' ).show();

    } else {
        $( '#cooldrinks' ).hide()
    }
    if ( elementId == 'snacks-btn' ) {
        $( '#snacks' ).show();

    } else {
        $( '#snacks' ).hide()
    }
    if ( elementId == 'tea-btn' ) {
        $( '#tea' ).show();

    } else {
        $( '#tea' ).hide()
    }
    if ( elementId == 'noodles-btn' ) {
        $( '#noodles' ).show();

    } else {
        $( '#noodles' ).hide()
    }
    if ( elementId == 'dumplings-btn' ) {
        $( '#dumplings' ).show();

    } else {
        $( '#dumplings' ).hide()
    }
    if ( elementId == 'icecream-btn' ) {
        $( '#icecreams' ).show();

    } else {
        $( '#icecreams' ).hide()
    }
    if ( elementId == 'fruit-btn' ) {
        $( '#fruits' ).show();

    } else {
        $( '#fruits' ).hide()
    }
    if ( elementId == 'starchy-btn' ) {
        $( '#starchy' ).show();

    } else {
        $( '#starchy' ).hide()
    }

    if ( elementId == 'all-btn' ) {
        $( '#veg ' ).show()
        $( '#nonveg ' ).show()
        $( '#snacks ' ).show()
        $( '#tea ' ).show()
        $( '#noodles ' ).show()
        $( '#dumplings ' ).show()
        $( '#icecreams ' ).show()
        $( '#fruits ' ).show()
        $( '#starchy ' ).show()
        $( '#cooldrinks ' ).show()

    }
}
