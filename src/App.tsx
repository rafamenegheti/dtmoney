import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header"
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from "./components/NewTransactionModal";

import { useState } from 'react'





export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  };
  
  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  };


  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactionModal 
      isOpen={ isNewTransactionModalOpen } 
      onRequestClose={ handleCloseNewTransactionModal }
      />
      <GlobalStyle />
    </>
  );
}


