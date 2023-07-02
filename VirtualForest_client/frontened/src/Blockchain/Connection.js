import { HashConnect } from 'hashconnect';

let hashconnect = new HashConnect();
let appMetadata = {
  name: "dApp Example",
  description: "An example hedera dApp",
  icon: "https://absolute.url/to/icon.png"
};

export const pairHashpack = async () => {
  let initData = await hashconnect.init(appMetadata, "testnet", false);

  return new Promise((resolve) => {
    hashconnect.foundExtensionEvent.once((walletMetadata) => {
      hashconnect.connectToLocalWallet(initData.pairingString, walletMetadata);
      localStorage.setItem('walletConnected', 'true'); // Store connection status in local storage
      localStorage.setItem('pairingString', initData.pairingString); // Store pairing string in local storage
    });

    console.log(initData.topic)

    hashconnect.pairingEvent.once((pairingData) => {
      console.log('Wallet paired');
      console.log(pairingData);
      console.log(pairingData.accountIds[0]);

      resolve({
        initData: initData,
        accountId: pairingData.accountIds[0]
      });
    });
  });
};

export const isWalletConnected = () => {
  const walletConnected = localStorage.getItem('walletConnected'); // Retrieve connection status from local storage
  return walletConnected === 'true';
};

// Check connection status and attempt reconnection when the page is loaded
window.addEventListener('load', async () => {
  if (isWalletConnected()) {
    const pairingString = localStorage.getItem('pairingString');
    try {
      await hashconnect.init(appMetadata, "testnet", false);
      // await hashconnect.init(appMetadata, "testnet", false);
      // await hashconnect.connectToLocalWallet(pairingString);
      console.log('Wallet reconnected successfully');
    } catch (error) {
      console.error('Error reconnecting wallet:', error);
    }
  }
});
