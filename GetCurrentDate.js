export default function GetCurrentDate() {
    // Gets Current Date And Returns Formatted
    const AddLeadingZeros = (n) => {
      // Used To ensure single digit numbers have a leading zero
      if (n <= 9) {
        return '0' + n;
      }
      return n;
    };
  
    let Current = new Date();
  
    // Formats Current Date e.g. 06/08/2021
    let CurrentDate = `${AddLeadingZeros(Current.getDate())}-${AddLeadingZeros(
      Current.getMonth() + 1
    )}-${Current.getFullYear()}`;
  
    // Formats Current Time e.g. 20:00
    let CurrentTime = `${Math.floor(
      (Current.getHours() * 60 + Current.getMinutes()) / 30
    )}`;
  
    // Returns Complete Date/Time e.g. 06/08/2021 20:00
    return [CurrentDate, CurrentTime];
  }
  