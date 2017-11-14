import * as m from 'mithril';

// View
export default class LoginComponent {
    _submitForm (e: any) {
        e.preventDefault();
        console.log('Logging In... ', e);
        window.location.href = '#!/todo';
    }
    view (vnode: any) {
        return [
            m('div.form-wrap.column.col-8.centered.mt-2.panel', {style: {marginTop: '10%'}},  [
                m('div.panel-header.text-center', [
                    m('h1.login-title', 'Login')
                ]),
                m('form#login-form.form-group.panel-body', {style: {backgroundColor: 'white'}, onsubmit: (e) => {this._submitForm(e)}}, [
                    m('div#username-label.login-form.form-label', {for: 'username-input'}, 'Username'),
                    m('input#username-input.mb-2.login-form.form-input', {type: 'text', name: 'username-input', placeholder:'Username'}),
                    m('div#password-label.login-label.form-label', {for: 'password-input'}, 'Password'),
                    m('input#username-input.mb-2.login-form.form-input', {type: 'password', name: 'password-input', placeholder:'Password'}),
                    m('div.form-button-wrap.mt-2', [
                        m('button#login-button.btn.btn-primary.mt-2.column.col-12', {type: 'sbumit'}, 'Login'),
                        m('a.btn.btn-link.centered.mt-2', {href: '#!/register'}, 'Need an account?')
                    ])
                ])
            ])
        ];
    }
}
