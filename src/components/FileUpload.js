
const FileUpload = () => {
    return (
        <div className="container col-8 mt-4">
            <div className="jumbotron py-4">
                <div className="form-group">
                    <h1>Upload file</h1>
                    <p className="lead mt-5 mb-2">Choose a file you want to upload:</p>
                    <div className="custom-file col-7 mt-4">
                        <input
                            type="file"
                            className="custom-file-input"
                            id="validatedCustomFile"
                            required
                        />
                        <label className="custom-file-label pl-2" for="validatedCustomFile">
                            Choose file...
                </label>
                    </div>
                    <small id="fileHelp" className="form-text text-muted pl-1 pt-1">
                        Accepted file type: .js
              </small>
                    <div class="custom-control custom-checkbox mt-4">
                        <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck1"
                        />
                        <label class="custom-control-label" for="customCheck1">
                            Upload as template file
                </label>
                        {/* <div className="invalid-feedback">
                  Example invalid custom file feedback
                </div> */}
                    </div>
                    <button type="submit" className="btn btn-primary mt-5">
                        Submit
              </button>
                </div>
            </div>
        </div>
    )
}

export default FileUpload
