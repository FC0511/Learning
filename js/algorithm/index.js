function min(numbers) {
    let len = numbers.length;
    if (len > 2) {
        let rest = numbers.slice(1);
        return min([numbers[0], min(rest)])
    } else {
        return Math.min.apply(null, numbers);
    }
}

function sort(numbers) {
    let len = numbers.length;
    if (len > 2) {
        let index = numbers.indexOf(min(numbers));
        let rest = numbers.splice(index, 1);
        return rest.concat(sort(numbers));
    } else {
        return numbers[0] > numbers[1] ? [numbers[0], numbers[1]] : numbers.reverse();
    }
}

min([1,0,4,5,11,2,30])
sort([1,0,4,5,11,2,30])