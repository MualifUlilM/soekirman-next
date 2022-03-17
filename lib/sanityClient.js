import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'l76km25n',
    apiVersion: '2022-03-14',
    dataset: 'production',
    token:'skSr3iXnGE0k4IN24m1mI3H5hAXivkch19n6bcqCzXuoJIKKgDSM8CnnOb11Ayoia7kFm62ZGzzdT6CYNhGZEqJEEbmUYTznPPk1SjnIFA2oDwkxnuwDL62xZX7xtqpEjfJVNhyckvsPRG4f5KS9iMPJCKoNyT7Gz1XkdoaYhzlIQVMoQMSR',
    useCdn: true
})