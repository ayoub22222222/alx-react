import React from 'react';
import PropTypes from 'prop-types';



function CourseListRow({isHeader, textFirstCell, textSecondCell}) {
	return (
		<tr>
			{isHeader ? (
				textSecondCell == null ? (
					<th cllSpan={2}>{textFirstCell}</th>
				) : (
					<>
						<th>{textFirstCell}</th>
						<th>{textSecondCell}</th>
					</>
				)

			) : (
				<>
					<td>{textFirstCell}</td>
					<td>{textSecondCell}</td>
				</>
			)
			}
			
		<tr/>
	);
};


CourseListRow.propTypes = {
	isHeader: PropTypes.string.bool,
	textFirstCell: PropTypes.string.isRequired,
	textSecondCell: PropTypes.string,
};

CourseListRow.defaultProps = {
	isHeader: false,
	textSecondCell: null,
};



export default CourseListRow; 
