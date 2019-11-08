<template>
  <div id="companyAttestation">
    <template v-if="EnterpriseStatus === 0">
      <attestation-form @showAttestationStatus="showAttestationStatus"
                        @showDisclaimer="showDisclaimer"></attestation-form>
    </template>
    <template v-else-if="EnterpriseStatus === 1">
      <company-info></company-info>
    </template>
    <template v-else-if="EnterpriseStatus === 2">
      <in-review></in-review>
    </template>
    <template v-else-if="EnterpriseStatus === -1">
      <refuse></refuse>
    </template>
  </div>
</template>

<script>//
import InReview from '../../../components/InReview'
import CompanyInfo from '../../../components/CompanyInfo'
import AttestationForm from '../../../components/AttestationForm'
import Refuse from '../../../components/Refuse'
import { mapState } from 'vuex'

export default {
  name: 'companyAttestation',
  methods: {
    showDisclaimer () {
      this.$emit('showDisclaimer')
    },
    showAttestationStatus () {
      this.$store.state.mine.EnterpriseStatus = 2
    }
  },
  computed: {
    ...mapState({
      EnterpriseStatus: state => state.mine.EnterpriseStatus
    })
  },
  components: {
    Refuse, AttestationForm, CompanyInfo, InReview
  }
}
</script>

<style lang="scss" scoped>
  #companyAttestation {
    position: relative;
    z-index: 1;
    padding: 46px 0 54px 0;
  }
</style>
