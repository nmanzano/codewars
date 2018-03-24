from decimal import Decimal

def lexicographics(to_analyze='string'):
    """This functioin provides the maximum, minimum,
    and average length of words

    Args:
        to_analyze (string): A string of text. Such as sentence or paragraph

    Returns:
        Tuple: the max, min and average number of words per line.

    Example:
        >>> import task_03
        >>> task_03.lexicographics('''Don't stop believing,
            Hold on to that feeling.''')
        (5, 3, Decimal(4.0))
    """
    results = []

    firstsplit = to_analyze.split('\n')
    for words in firstsplit:
        secondsplit = words.split()
        currwordmax = len(secondsplit)
        results.append(currwordmax)
        maxnum = max(results)
        minnum = min(results)
        avgnum = Decimal(sum(results))/Decimal(len(results))

    print(maxnum, minnum, avgnum)

lexicographics('''Don't stop believing,
    Hold on to that feeling.''')
