
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

// <== METHOD FOR UPDATE ITEMS IN TABLE DATA: ==>

const wholeTotalPriceTag = document.querySelector( '#wholetotalprice' );
let wholeTotalPrice;

function toConvertTableData () {
    wholeTotalPrice = 0;
    document.querySelector( '#tbody' ).innerHTML = '';
    for ( const key in localStorage ) {


        const object = JSON.parse( localStorage.getItem( key ) );

        if ( localStorage.hasOwnProperty( key ) ) {
            const tr = `<tr>
                  <td>${object.name}</td>
                  <td>${object.qty}</td>
                  <td>${object.unitPrice}</td>
                  <td>${( object.qty * object.unitPrice )}</td>
                  <td><i class="fa-solid fa-xmark" onclick="removeList(this)"></i></td>
                </tr>`;

            wholeTotalPrice += object.totalPrice;

            const tBody = document.querySelector( '#tbody' ).innerHTML += tr;


        }
    }
    const tableBody = document.querySelector( '#tbody' ).rows.length;
    console.log( 'tableBody', parseInt( tableBody ) );
    if ( parseInt( tableBody ) ) {
        console.log( 'running1' );
        wholeTotalPriceTag.value = `Total Price Is: ${wholeTotalPrice}`;
    } else {
        console.log( 'running2' );
        wholeTotalPriceTag.value = 'Total Price Is: ';
    }
    billPaymentSector( wholeTotalPrice );
}

function removeList ( clickedElement ) {

    const parent = clickedElement.parentNode.parentNode.children;
    const clickedNodeName = parent[ 0 ].textContent;

    for ( const key in localStorage ) {

        const object = JSON.parse( localStorage.getItem( key ) );
        console.log( key );

        if ( localStorage.hasOwnProperty( key ) ) {
            if ( object.name == clickedNodeName ) {

                localStorage.removeItem( object.id );
                break;
            }

        }
    }
    toConvertTableData();
}

$( 'document' ).ready( () => {
    toConvertTableData();
} );

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

const extraItemName = document.querySelector( '#extraitemname' );
const extraItemPrice = document.querySelector( '#itemprice' );
const extraItemQuantity = document.querySelector( '#itemquantity' );
const extraItemAddBtn = document.querySelector( '#addbtn' );

extraItemAddBtn.addEventListener( 'click', addExtraItemToBill );
let extraItemId = 102;

function addExtraItemToBill () {

    let currentObject = { id: '', name: '', qty: '', unitPrice: '', totalPrice: '' };

    if ( checkValid() ) {

        extraItemId += 1;

        currentObject.id = String( extraItemId );
        currentObject.name = extraItemName.value;
        currentObject.unitPrice = extraItemPrice.value;
        currentObject.qty = extraItemQuantity.value;
        currentObject.totalPrice = parseFloat( currentObject.unitPrice ) * parseFloat( currentObject.qty );
        console.log( 'current object:', currentObject );

        localStorage.setItem( `${currentObject.id}`, JSON.stringify( currentObject ) );

        clearValues();
        toConvertTableData();

    } else {
        alert( 'Enter All Values Correctly!' );
    }
}

function checkValid () {

    let valid = false;

    if ( extraItemName.value == '' || extraItemPrice.value == '' || extraItemQuantity.value == '' ) {
        return valid;
    } else if ( extraItemPrice.value <= 0 || extraItemQuantity.value <= 0 ) {
        return valid;
    }
    else {
        valid = true;
        return valid;
    }
}
function clearValues () {

    extraItemName.value = '';
    extraItemPrice.value = '';
    extraItemQuantity.value = '';
}

// 
const billBtn = document.querySelector( '#bill-btn' );
const payBtn = document.querySelector( '#goback-btn' );

// FOR INITIAL TABLE PAGE SHOW 
$( '#tablepage' ).show();
$( '#billpage' ).hide();

billBtn.addEventListener( 'click', () => {
    const tableBody = document.querySelector( '#tbody' ).rows.length;
    console.log( 'tableBody', tableBody );

    if ( parseInt( tableBody ) > 0 ) {
        toBillPage();
    } else {
        alert( 'Please Select Atleast One Item' );
    }
} );

payBtn.addEventListener( 'click', toTablePage );


const amountlabel = document.querySelector( '#amount' );
const gstAmountlabel = document.querySelector( '#gstamount' );
const payablelabel = document.querySelector( '#payable' );
const tenderlabel = document.querySelector( '#tender' );
const changelabel = document.querySelector( '#change' );
const changeInput = document.querySelector( '#change-input' );

const billPaymentSector = ( purchasedAmount ) => {

    amountlabel.value = `${purchasedAmount}`;
    gstAmountlabel.value = ( parseFloat( ( wholeTotalPrice / 100 ) * 18 ) ).toFixed( 2 );
    payablelabel.value = parseFloat( amountlabel.value ) + parseFloat( gstAmountlabel.value );

    gstAmountlabel.addEventListener( 'keyup', () => {
        payablelabel.value = ( parseFloat( amountlabel.value ) + parseFloat( gstAmountlabel.value ) ).toFixed( 2 );
    } );

    tenderlabel.addEventListener( 'keyup', () => {

        changelabel.value = ( parseFloat( tenderlabel.value ) - parseFloat( payablelabel.value ) ).toFixed( 2 );
        changeInput.value = `Change : ${changelabel.value}`;
    } );

}

function toBillPage () {
    $( '#tablepage' ).hide();
    $( '#billpage' ).show();
}
function toTablePage () {
    console.log( 'changelabel.value', changelabel.value );

    if ( parseFloat( changelabel.value ) >= 0 ) {

        $( '#billpage' ).hide();
        $( '#tablepage' ).show();

        tenderlabel.value = '';
        changeInput.value = '';
        changelabel.value = '';
        wholeTotalPriceTag.value = '';
        localStorage.clear();
        alert( 'successfully paid !' );
        toConvertTableData();
    } else {

        alert( 'can you Please Enter Correct Tender Amount!' );
    }
}