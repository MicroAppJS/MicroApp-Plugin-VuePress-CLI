// https://github.com/martinheidegger/markdown-it-replace-link/blob/master/index.js

// 暂时用不到
module.exports = function(options) {
    const replace = options.replaceLink;
    return md => {
        md.core.ruler.after(
            'inline',
            'replace-link',
            function(state) {
                if (typeof replace === 'function') {
                    state.tokens.forEach(function(blockToken) {
                        if (blockToken.type === 'inline' && blockToken.children) {
                            blockToken.children.forEach(function(token) {
                                const type = token.type;
                                if (type === 'link_open') {
                                    replaceAttr(token, 'href', replace, state.env);
                                } else if (type === 'image') {
                                    replaceAttr(token, 'src', replace, state.env);
                                }
                            });
                        }
                    });
                }
                return false;
            }
        );
    };
};

function replaceAttr(token, attrName, replace, env) {
    token.attrs.forEach(function(attr) {
        if (attr[0] === attrName) {
            attr[1] = replace(attr[1], env, token);
        }
    });
}
