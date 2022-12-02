export const checkEmail = (address) => {
    var arr1 = address.split("@");
    if (arr1.length >= 2 && arr1[1]) {
        var arr2 = arr1[1].split(".");
        if (arr2.length >= 2 && arr2[1]) {
            return true;
        }
    } else {
        return false;
    }
};