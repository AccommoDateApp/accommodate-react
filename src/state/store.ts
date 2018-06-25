export interface PowerUpStore {
  isFetchingPowerUps: boolean;
  powerups: PowerUp[];

  activePowerUpPurchase?: PowerUp;
  purchaseSuccess?: boolean;
}

export interface PowerUp {
  id: string;
  iconUrl: string;
  name: string;
  description: string;
  price: number;
}

export const defaultPowerUpStoreState: PowerUpStore = {
  isFetchingPowerUps: false,
  powerups: [],

  activePowerUpPurchase: undefined,
  purchaseSuccess: undefined,
};
