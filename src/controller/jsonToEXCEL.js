const ExcelJS = require( 'exceljs' );
const workbook = new ExcelJS.Workbook();


const convertIntoXL = async ( data ) => {
    try {
        logger.info( 'convertIntoXL' );
        const worksheet = workbook.addWorksheet( '2021' );

        worksheet.columns = [
            { header: 'ratedByUsername', key: 'ratedByUsername', width: 12 },
            { header: 'ratedToUsername', key: 'ratedToUsername', width: 12 },
            { header: 'ratedByFullName', key: 'ratedByFullName', width: 12 },
        ]

        console.log(data.length , "count")
        for await ( const row of data ) {
            worksheet.addRow( {
                ratedByUsername: row.ratedByUsername,
                ratedToUsername: row.ratedToUsername,
                ratedByFullName: row.ratedByFullName
            } );
        }

        //write to file in same directory

        await workbook.xlsx.writeFile( '2021.xlsx' );
        return 'Done';

    } catch ( error ) {
        return error;
    }
}

module.exports = { convertIntoXL }







