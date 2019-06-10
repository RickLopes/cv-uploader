
module.exports = {
    addCandidatePage: (req, res) => {
        res.render('candidate-page.ejs', {
            title: "CV Uploader - Candidate page",
            message: '',
            error: false,
        });
    },
    addCandidate: (req, res) => {
        if (!req.files) {
            return res.status(400).send("No files were uploaded.");
        }

        let message = '';
        let full_name = req.body.full_name;
        let birthdate = req.body.birthdate;
        let uploadedFile = req.files.cv_file;
        let cv_name = uploadedFile;
        let fileExtension = uploadedFile.mimetype.split('/')[1];
        cv_name = full_name.split(' ').join('') + '.' + fileExtension;

        let nameQuery = "SELECT * FROM `candidates` WHERE full_name = '" + full_name + "' AND `birthdate` = '" + birthdate +"'";

        db.query(nameQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            if (result.length > 0) {
                message = 'Candidate already exists';
                res.render('candidate-page.ejs', {
                    message,
                    title:"CV Uploader - Candidate page",
                    error: true,
                });
            } else {
                // check the filetype before uploading it
                if (uploadedFile.mimetype === 'application/pdf') {
                    // upload the file to the /public/assets/img directory
                    uploadedFile.mv(`public/assets/cv/${cv_name}`, (err ) => {
                        if (err) {
                            return res.status(500).send(err);
                        }
                        // send the candidate's details to the database
                        let query = "INSERT INTO `candidates` (full_name, birthdate, cv_file) VALUES ('" +
                            full_name + "', '" + birthdate + "', '" + uploadedFile + "')";
                        db.query(query, (err, result) => {
                            if (err) {
                                return res.status(500).send(err);
                            }
                            //res.redirect('/add/#'+full_name.split(' ').join('_')+'');
                            message = full_name + " your CV was successfully submitted! Congratulations!"
                            res.render('candidate-page.ejs', {
                                message,
                                title: "CV Uploader - Candidate page",
                                error: false,
                            });
                        });
                    });
                } else {
                    message = "Invalid file format. Submit your file in 'pdf' format.";
                    res.render('candidate-page.ejs', {
                        message,
                        title: "CV Uploader - Candidate page",
                        error: true,
                    });
                }
            }
        });
    },
};

