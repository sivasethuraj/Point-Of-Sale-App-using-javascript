
const items = [

    {
        id: '11', name: 'veg1', qty: '0', unitPrice: '30', totalPrice: '0',
    },
    {
        id: '12', name: 'veg2', qty: '0', unitPrice: '40', totalPrice: '0',
    },
    {
        id: '21', name: 'nonveg1', qty: '0', unitPrice: '100', totalPrice: '0',
    },
    {
        id: '22', name: 'nonveg2', qty: '0', unitPrice: '150', totalPrice: '0',
    },
    {
        id: '31', name: 'cooldrink1', qty: '0', unitPrice: '10', totalPrice: '0',
    },
    {
        id: '32', name: 'cooldrink2', qty: '0', unitPrice: '20', totalPrice: '0',
    },
    {
        id: '41', name: 'snack1', qty: '0', unitPrice: '20', totalPrice: '0',
    },
    {
        id: '42', name: 'snack2', qty: '0', unitPrice: '20', totalPrice: '0',
    },
    {
        id: '51', name: 'tea1', qty: '0', unitPrice: '10', totalPrice: '0',
    },
    {
        id: '52', name: 'tea2', qty: '0', unitPrice: '20', totalPrice: '0',
    },
    {
        id: '61', name: 'noodles1', qty: '0', unitPrice: '50', totalPrice: '0',
    },
    {
        id: '62', name: 'noodles2', qty: '0', unitPrice: '60', totalPrice: '0',
    },
    {
        id: '71', name: 'dumpling1', qty: '0', unitPrice: '120', totalPrice: '0',
    },
    {
        id: '72', name: 'dumpling2', qty: '0', unitPrice: '130', totalPrice: '0',
    },
    {
        id: '81', name: 'icecream1', qty: '0', unitPrice: '50', totalPrice: '0',
    },
    {
        id: '82', name: 'icecream2', qty: '0', unitPrice: '70', totalPrice: '0',
    },
    {
        id: '91', name: 'fruit1', qty: '0', unitPrice: '30', totalPrice: '0',
    },
    {
        id: '92', name: 'fruit2', qty: '0', unitPrice: '50', totalPrice: '0',
    },
    {
        id: '101', name: 'starchy1', qty: '0', unitPrice: '70', totalPrice: '0',
    },
    {
        id: '102', name: 'starchy2', qty: '0', unitPrice: '80', totalPrice: '0',
    },
]


// <== METHOD FOR  : ==> identifying details of the item and set local storage

const image = document.querySelectorAll( 'img' );
image.forEach( ( eachElement ) => {

    eachElement.addEventListener( 'click', ( element ) => {

        const elementId = element.target.id;
        const clickedItemIndex = items.findIndex( ( object ) => {
            return object.id === elementId;
        } );
        console.log( 'index :', clickedItemIndex );
        const currentObject = items[ clickedItemIndex ];

        currentObject.qty = parseInt( currentObject.qty ) + 1;
        currentObject.totalPrice = parseFloat( currentObject.qty ) * parseFloat( currentObject.unitPrice );
        localStorage.setItem( `${currentObject.id}`, JSON.stringify( currentObject ) );
        toConvertTableData();
    } );
} );

// <== METHOD FOR UPDATE ITEMS : ==>

function toConvertTableData () {
    document.querySelector( '#tbody' ).innerHTML = '';
    for ( const key in localStorage ) {

        console.log( ` ${localStorage.getItem( key )}` )
        const object = JSON.parse( localStorage.getItem( key ) );

        if ( localStorage.hasOwnProperty( key ) ) {
            const tr = `<tr>
                  <td>${object.name}</td>
                  <td>${object.qty}</td>
                  <td>${object.unitPrice}</td>
                  <td>${( object.qty * object.unitPrice )}</td>
                </tr>`;
            const tBody = document.querySelector( '#tbody' ).innerHTML += tr;
        }
    }
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
