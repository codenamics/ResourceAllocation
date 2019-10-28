exports.setAllocationObject = (
    jan,
    feb,
    mar,
    apr,
    may,
    jun,
    jul,
    aug,
    sep,
    nov,
    oct,
    dec) => {
    let allocationObj = {}

    jan ? allocationObj.jan = jan : 0
    feb ? allocationObj.feb = feb : 0
    mar ? allocationObj.mar = mar : 0
    apr ? allocationObj.apr = apr : 0
    may ? allocationObj.may = may : 0
    jun ? allocationObj.jun = jun : 0
    jul ? allocationObj.jul = jul : 0
    aug ? allocationObj.aug = aug : 0
    sep ? allocationObj.sep = sep : 0
    oct ? allocationObj.oct = oct : 0
    nov ? allocationObj.nov = nov : 0
    dec ? allocationObj.dec = dec : 0

    return allocationObj;
}