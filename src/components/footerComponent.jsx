import React from 'react';

export default class FooterComponent extends React.Component {
    render() {
        return (

            <div>
                <footer class="[ footer py-5 ]">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="[ footer__text ] [ text-center ]">
                                    <p id="copyright">Copyright &copy; Louise Ryste</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </footer>
            </div >
        )
    }
}