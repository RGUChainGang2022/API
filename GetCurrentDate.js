const AddLeadingZeros = (n) => {
  // Used To ensure single digit numbers have a leading zero
  if (n <= 9) {
    return "0" + n;
  }
  return n;
};

export function GetCurrentDate() {
  // Gets Current Date And Returns Formatted

  let Current = new Date();

  // Formats Current Date e.g. 2022-03-27
  let CurrentDate = `${AddLeadingZeros(
    Current.getFullYear()
  )}-${AddLeadingZeros(Current.getMonth() + 1)}-${Current.getDate()}`;

  let CurrentMin = 0;
  if (Current.getMinutes() > 35) {
    CurrentMin = 30;
  } else {
    CurrentMin = 0;
  }

  // Formats Current Time e.g. 08:00
  let CurrentTime = `${AddLeadingZeros(Current.getHours())}:${AddLeadingZeros(
    CurrentMin
  )}`;

  return `${CurrentDate}T${CurrentTime}`;
}

export function GetSettlementPeriod() {
  let Current = new Date();

  let CurrentSettlementTime = `${Math.floor(
    (Current.getHours() * 60 + Current.getMinutes()) / 30
  )}`;

  return CurrentSettlementTime;
}

export function GetSettlementDate() {
  let Current = new Date();

  let CurrentSettlementDate = `${AddLeadingZeros(
    Current.getDate()
  )}-${AddLeadingZeros(Current.getMonth() + 1)}-${Current.getFullYear()}`;

  return CurrentSettlementDate;
}
