import * as m from 'mithril';

// View
export default class RegisterComponent {
    _submitForm (e: any) {
        e.preventDefault();
        console.log('Signing Up... ', e);
        window.location.href = '#!/todo';
    }
    view (vnode: any) {
        return [
            m('div.form-wrap.column.col-8.centered.mt-2.panel', {style: {marginTop: '10%'}},  [
                m('div.panel-header.text-center', [
                    m('h1.login-title', 'Sign Up')
                ]),
                m('form#login-form.form-group.panel-body', {style: {backgroundColor: 'white'}, onsubmit: (e) => {this._submitForm(e)}}, [
                    m('div#email-label.register-label.form-label', {for: 'email-input'}, 'Email'),
                    m('input#email-input.mb-2.register-form.form-input', {type: 'email', name: 'email-input', placeholder:'Email'}),
                    m('div#first-name-label.register-form.form-label', {for: 'first-name-input'}, 'First Name'),
                    m('input#first-name-input.mb-2.register-form.form-input', {type: 'text', name: 'first-name-input', placeholder:'First Name'}),
                    m('div#last-name-label.register-label.form-label', {for: 'last-name-input'}, 'Last Name'),
                    m('input#username-input.mb-2.register-form.form-input', {type: 'password', name: 'last-name-input', placeholder:'Last Name'}),
                    m('div#password-label.login-label.form-label', {for: 'password-input'}, 'Password'),
                    m('input#username-input.mb-2.login-form.form-input', {type: 'password', name: 'password-input', placeholder:'Password'}),
                    m('div#password-label.login-label.form-label', {for: 'password-input'}, 'Confirm Password'),
                    m('input#confirm-password-input.mb-2.login-form.form-input', {type: 'password', name: 'confirm-password-input', placeholder:'Confirm Password'}),
                    m('div.form-button-wrap', {style: {marginTop: '35px'}}, [
                        m('button#login-button.btn.btn-primary.column.col-12', {type: 'sbumit'}, 'Sign Up'),
                        m('a.btn.btn-link.centered.mt-2', {href: '#!/login'}, 'Already have an account?')
                    ])
                ])
            ])
        ];
    }
}
