import * as m from 'mithril';

// View
export default class EmptyComponent {
    view (vnode: any) {
        return [
            m('div.empty', {style: {backgroundColor: 'white'} }, [
                m('div.empty-icon', [
                    m(`i.icon.icon-4x.text-${vnode.attrs.verb}.icon-${vnode.attrs.icon}`)
                ]),
                m('p.empty-title.h5', vnode.attrs.title),
                m('p.empty-subtitle', vnode.attrs.subtitle),
                m('div.empty-action', [
                    vnode.attrs.action
                ])
            ])
        ]
    }
}
