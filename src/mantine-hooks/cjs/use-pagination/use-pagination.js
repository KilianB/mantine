'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var useUncontrolled = require('../use-uncontrolled/use-uncontrolled.js');
var range = require('../utils/range/range.js');

const DOTS = "dots";
function usePagination({
  total,
  siblings = 1,
  boundaries = 1,
  page,
  initialPage = 1,
  onChange
}) {
  const _total = Math.max(Math.trunc(total), 0);
  const [activePage, setActivePage] = useUncontrolled.useUncontrolled({
    value: page,
    onChange,
    defaultValue: initialPage,
    finalValue: initialPage
  });
  const setPage = (pageNumber) => {
    if (pageNumber <= 0) {
      setActivePage(1);
    } else if (pageNumber > _total) {
      setActivePage(_total);
    } else {
      setActivePage(pageNumber);
    }
  };
  const next = () => setPage(activePage + 1);
  const previous = () => setPage(activePage - 1);
  const first = () => setPage(1);
  const last = () => setPage(_total);
  const paginationRange = React.useMemo(() => {
    const totalPageNumbers = siblings * 2 + 3 + boundaries * 2;
    if (totalPageNumbers >= _total) {
      return range.range(1, _total);
    }
    const leftSiblingIndex = Math.max(activePage - siblings, boundaries);
    const rightSiblingIndex = Math.min(activePage + siblings, _total - boundaries);
    const shouldShowLeftDots = leftSiblingIndex > boundaries + 2;
    const shouldShowRightDots = rightSiblingIndex < _total - (boundaries + 1);
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = siblings * 2 + boundaries + 2;
      return [...range.range(1, leftItemCount), DOTS, ...range.range(_total - (boundaries - 1), _total)];
    }
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = boundaries + 1 + 2 * siblings;
      return [...range.range(1, boundaries), DOTS, ...range.range(_total - rightItemCount, _total)];
    }
    return [
      ...range.range(1, boundaries),
      DOTS,
      ...range.range(leftSiblingIndex, rightSiblingIndex),
      DOTS,
      ...range.range(_total - boundaries + 1, _total)
    ];
  }, [_total, siblings, activePage]);
  return {
    range: paginationRange,
    active: activePage,
    setPage,
    next,
    previous,
    first,
    last
  };
}

exports.DOTS = DOTS;
exports.usePagination = usePagination;
//# sourceMappingURL=use-pagination.js.map
