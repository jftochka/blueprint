import { wallets } from './send/wallets';

export function createMnemonicProvider() {
    const walletVersion = process.env.WALLET_VERSION;
    const normalizedVersion = walletVersion ? walletVersion.trim() : '';

    // Validate the WALLET_VERSION against supported versions
    const supportedVersions = Object.keys(wallets);
    if (!supportedVersions.includes(normalizedVersion)) {
        throw new Error(`Unsupported wallet version: ${normalizedVersion}. Supported versions are: ${supportedVersions.join(', ')}`);
    }

    // Proceed to create the MnemonicProvider
    // ... (rest of the function implementation)
}