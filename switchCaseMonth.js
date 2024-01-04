function monthOfYear(month) {
  switch (month) {
    case 1:
      console.log(`month no ${month} =January`);
      break;
    case 2:
      console.log(`month no ${month} =February`);
      break;
    case 3:
      console.log(`month no ${month} =March`);
      break;
    case 4:
      console.log(`month no ${month} =April`);
      break;
    case 5:
      console.log(`month no ${month} =May`);
      break;
    case 6:
      console.log(`month no ${month} =June`);
      break;
    case 7:
      console.log(`month no ${month} =July`);
      break;
    case 8:
      console.log(`month no ${month} =August`);
      break;
    case 9:
      console.log(`month no ${month} =September`);
      break;
    case 10:
      console.log(`month no ${month} =October`);
      break;
    case 11:
      console.log(`month no ${month} =November`);
      break;
    case 12:
      console.log(`month no ${month} =December`);
      break;

    default:
        console.log(`Invalid input month no ${month} `);
      break;
  }
}
monthOfYear(0);
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(null);
monthOfYear(undefined);