export const EnvConfiguration = () => ({
    mongodb: process.env.MONGODB,
    port: process.env.PORT || 3002
})