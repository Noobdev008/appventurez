// Rewrite the "switch" into an "if"
// Write the code using if..else which would correspond to the following switch:

switch (browser) {
    case 'Edge':
        console.log("You've got the Edge!");
        break;

    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        console.log('Okay we support these browsers too');
        break;

    default:
        console.log('We hope that this page looks ok!');
}


if (browser == 'Edge') {
    console.log("You've got the Edge!");
} else if (browser == 'Chrome'
    || browser == 'Firefox'
    || browser == 'Safari'
    || browser == 'Opera') {
    console.log('Okay we support these browsers too');
} else {
    console.log('We hope that this page looks ok!');
}
// Please note: the construct browser == 'Chrome' || browser == 'Firefox' … is split into multiple lines for better readability.